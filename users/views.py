from inspect import trace
from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework import ISO_8601, serializers, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
from rest_framework.serializers import Serializer
from rest_framework_simplejwt.views import TokenObtainPairView
from.serializers import (ClientSerializer, CustomClientRegisterSerializer, 
                            CustomProfessionlRegisterSerializer, ProfessionalSerializer, 
                            UserSerializer, MyTokenObtainPairSerializer, RatingSerializer, 
                            GetRatingSerializer, ReportSerializer, GetReportSerializer,
                            FavouriteSerializer, GetFavouriteSerializer, ChangePasswordSerializer
                            )
from rest_framework import generics
from .models import Client, Professionals, Report, User, Rating, Favourite
from hire.models import HireProfessional
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes, force_text
from users.token import account_activation_token
from django.db.models import Q

from django.db.models import Avg

from .permission import IsClientUser, IsProfessionalUser

# Create your views here.



'''
register new client with email verification
'''
class registerClientView(APIView):

    def post(self, request):
        serializer = CustomClientRegisterSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            client = serializer.save() 
            client.is_active = False
            client.is_accepted = False
            # print(client.is_active)
            client.save()
            current_site = get_current_site(request)
            mail_subject = "Activate your account"
            message = render_to_string(
                'acc_active_email.html',
                {
                    'user': client,
                    'domain': current_site.domain,
                    'uid': urlsafe_base64_encode(force_bytes(client.pk)),
                    'token': account_activation_token.make_token(client),

                }
            )

            to_email = client.email
            email = EmailMessage(mail_subject, message, to=[to_email])
            email.send()

            data['email'] = client.email
            data['username'] = client.username
            

            return JsonResponse (
            {
                "message":"user created.",
                "success" : True,
                "result" : data,
                "status" : status.HTTP_201_CREATED
            }
            )
        else:
            data = serializer.errors
        return Response(data)
    permission_classes = (AllowAny,)



'''
register new professionals with email verification
'''
class registerProfessionalsView(APIView):

    def post(self, request):
        print('url hitted')
        serializer = CustomProfessionlRegisterSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            professional = serializer.save() 
            professional.is_active = False
            professional.is_accepted = False
            # print(client.is_active)
            professional.save()
            current_site = get_current_site(request)
            mail_subject = "Activate your account"
            message = render_to_string(
                'acc_active_email.html',
                {
                    'user': professional,
                    'domain': current_site.domain,
                    'uid': urlsafe_base64_encode(force_bytes(professional.pk)),
                    'token': account_activation_token.make_token(professional),

                }
            )

            to_email = professional.email
            email = EmailMessage(mail_subject, message, to=[to_email])
            email.send()

            # success = True
            # data['success'] = success
            data['email'] = professional.email
            data['username'] = professional.username
           

            return JsonResponse (
            {
                "message":" professional created.",
                "success" : True,
                "result" : data,
                "status" : status.HTTP_201_CREATED
            }
            )

        else:
            data = serializer.errors
        return Response(data)
    permission_classes = (AllowAny,)





'''
body part of email verification detailed with activation link
'''
def email_sent(request):
    return render(request, 'account/auth/email_sent.html')

'''
this function provide email verify link and it will be check link is valid or not
'''
def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, user.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.is_accepted = True
        user.save()
        return redirect("https://r-handsforhire.herokuapp.com/login")
    else:
        return HttpResponse("Activation Link is Invalid!")



'''
login user both client and professinals

'''

class LoginView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
    









'''
list  all professionals as per as our requirements
'''
class GetAllProfessionals(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
        professionals = User.objects.filter(Q(is_professional=True) & Q(is_active=True) & Q(is_superuser=False) & Q(is_client=False))
        serializer = UserSerializer(professionals, many=True)
        # print('hello',serializer.professional.first_name)
        return Response(serializer.data)








'''
fetching single user from user model with paramater username
'''
@api_view(['GET'])
@permission_classes([AllowAny])
def getSignalUser(request, username):
    try:
        user = User.objects.get(username=username)    
    except User.DoesNotExist:
        return Response (status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        Serializer = UserSerializer(user, many=False)
        # print('hello', user.professional.profilePicture)
        return Response(Serializer.data)




'''
update clint profile
'''

class ClientProfileUpdateView(APIView):
    permission_classes = (IsAuthenticated,IsClientUser,)
    def put(self, request):
        serializer = ClientSerializer(data=request.data, instance=request.user.client)
        data = {}
        print(data)
        if serializer.is_valid():
            client = serializer.save()
            client.save()
            data['first_name'] = client.first_name
            data['last_name'] = client.last_name
            data['phone_number'] = client.phone_number

            return JsonResponse({
                'message': "your profile has been updated",
                "success" : True,
                "result" : serializer.data,
                "status" : status.HTTP_200_OK
            })
        else:
            data = serializer.errors
        return JsonResponse({'message':'user serializer response', 'response': serializer.data}) 
        





'''
update professionals profile
'''
class ProfessionalProfileUpdateView(APIView):
    permission_classes = (IsAuthenticated,IsProfessionalUser,)
    def put(self, request):
        serializer = ProfessionalSerializer(data=request.data, instance=request.user.professional)
      

        if serializer.is_valid():
            professionals = serializer.save()
            professionals.save()

           
            
            return JsonResponse({
                'message': "your profile has been updated",
                "success" : True,
                "result" : serializer.data,
                "status" : status.HTTP_200_OK
            })
        else:
            data = serializer.errors
            
        return JsonResponse({'message':'user serializer response', 'response': serializer.data}) 

@api_view(['POST'])
@permission_classes([AllowAny])
def updateMyProfile(request, id):

    professional = Professionals.objects.get( id = id)
    serializer = ProfessionalSerializer(data=request.data, instance=professional)

    print(serializer)

'''
deleting single user from user model with paramater username 
'''
class DeleteUserView(APIView):
    permission_classes(IsAuthenticated,)
    def delete(self, request, username):
        try:
            user = User.objects.get(username=username)
            user.delete()
            return JsonResponse({"message":"user deleted successful.", "status":status.HTTP_200_OK})
        except User.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'user does not exists'})




@api_view(['GET'])
@permission_classes([AllowAny,])
def getProfessionalByName(request, username):
    try:
        user = User.objects.filter(Q(username__icontains=username))    
    except User.DoesNotExist:
        return Response (status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        Serializer = UserSerializer(user, many=True)
        return Response(Serializer.data)





class GetElectrician(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
       
        professionals = Professionals.objects.filter(profession = 'Electrician')
        serializer = ProfessionalSerializer(professionals, many=True)
        # print('hello',serializer.professional.first_name)
        return Response(serializer.data)




class GetPlumber(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
       
        professionals = Professionals.objects.filter(Q(profession = 'Plumber'))
        serializer = ProfessionalSerializer(professionals, many=True)
        # print('hello',serializer.professional.first_name)
        return Response(serializer.data)



# @api_view(['GET'])
# @permission_classes([AllowAny])
# def searchByName(request, username):
#     professionals = User.objects.get(Q(username__icontains = username))

#     serializer = UserSerializer(professionals, many = True)

#     return Response(serializer.data)



@api_view(['GET'])
@permission_classes([AllowAny])
def searchByName(request, username):
    
        user = User.objects.filter(Q(username__icontains = username))    

        Serializer = UserSerializer(user, many=True)
        # print('hello', user.professional.profilePicture)
        return Response(Serializer.data)





class GetReviewByID(APIView):
    permission_classes = ([IsAuthenticated, IsClientUser])
    def get(self, request, id):
        rates = Rating.objects.filter(id = id)
        
        serializer = GetRatingSerializer(rates, many=True)
        return Response(serializer.data)



'''
list  all ratings 
'''
class GetAllRatings(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
        rates = Rating.objects.all()
        # avg_rating = rates.aggregate(Avg("stars"))
        # print("alllllllllllllllll", avg_rating)

        serializer = GetRatingSerializer(rates, many=True)
        return Response(serializer.data)

'''
review post 
'''

class ReviewForProfessional(APIView):
    permission_classes=(IsAuthenticated, IsClientUser,)

    def current_user(self):
        user = self.request.user.client.user_id
        return user

    def post(self, request, username):
        try:
            professional = Professionals.objects.get(user__username=username)
            data = request.data.dict()

            data['client'] = self.current_user()
            data['professional'] = professional.user_id
            
            print(data)
            
            # import pdb;pdb.set_trace()

            already_posts = Rating.objects.filter(client=self.current_user(), professional=professional.user_id)


            if already_posts:
                return JsonResponse({"message":'already reviewed'})
            
            serializer = RatingSerializer(data=data)
            data = {}
            if serializer.is_valid():
                report = serializer.save()
                data['comment']=report.comment
                return JsonResponse({
                    "messages":"review success",
                    "result":serializer.data
                })
            return Response(serializer.data)

            # already_posts = Rating.objects.filter(client=self.current_user(), professional=professional.user_id)
            hired_professional = HireProfessional.objects.filter(client=self.current_user(), professional=professional.user_id)

            # if hired_professional:
            #     # return JsonResponse({"message":'already hired'})
            
            #     if already_posts:
            #         return JsonResponse({"message":'already reviewed'})
            
            #     serializer = RatingSerializer(data=data)
            #     data = {}
            #     if serializer.is_valid():
            #         report = serializer.save()
            #         data['comment']=report.comment
            #         return JsonResponse({
            #             "messages":"review success",
            #             "result":serializer.data
            #         })
            #         return Response(serializer.data)
            # return JsonResponse({"message":'hire first'})
        except Professionals.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'user does not exists'})





'''
partial update review
'''
class UpdateReview(APIView):
    permission_classes=(IsAuthenticated, IsClientUser,)

    def patch(self, request, pk):
        try:
            instance = Rating.objects.get(id=pk)
            serializer = RatingSerializer(data=request.data, instance=instance, partial=True)
            data = {}
            if serializer.is_valid():
                report = serializer.save()
                data['comment']=report.comment
                return JsonResponse({
                    "messages":"review success",
                    "result":serializer.data
                })
                
            return Response(serializer.data)
        except Rating.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'Review does not exists'})
        

'''
get all reviewed for specific professional
'''

class GetReviewedBySpecificProfessional(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, username):
        try:
            review = Rating.objects.filter(professional__user_id__username=username)
            # review = review.aggregate(Avg("stars"))["stars__avg"]
            # review = round(review, 2)
            serializer = GetRatingSerializer(review, many=True)
            return Response(serializer.data)
        except Rating.DoesNotExist:
            return Response (status=status.HTTP_404_NOT_FOUND)

'''
average ratings
'''

class AverageRatings(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, username):
        try:
            review = Rating.objects.filter(professional__user_id__username=username)
            avg_ratings = review.aggregate(Avg("stars"))["stars__avg"]
            if avg_ratings== None:
                avg_ratings=0
            avg_ratings = round(avg_ratings, 1)
            print("avg ratings", avg_ratings)
            serializer = GetRatingSerializer(review, many=True)
            return JsonResponse ({"avg_ratings":avg_ratings})
        except Rating.DoesNotExist:
            return Response (status=status.HTTP_404_NOT_FOUND)



class GetallReviews(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, username):
        try:
            review = Rating.objects.filter(Q(professional__user_id__username=username))
            # import pdb;pdb.set_trace()
            serializer = RatingSerializer(review, many=True)
            return Response(serializer.data)
        except Rating.DoesNotExist:
            return Response (status=status.HTTP_404_NOT_FOUND)


class GetMyReviews(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, username, client):
        try:
            review = Rating.objects.filter(Q(professional__user_id__username=username) and Q(client__user_id__username = client))
            
            # import pdb; pdb.set_trace()
            serializer = GetRatingSerializer(review, many=True)
            return Response(serializer.data)
        except Rating.DoesNotExist:
            return Response (status=status.HTTP_404_NOT_FOUND)            


class GetReviewsOfOtherClients(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, username, client):
        try:
            review = Rating.objects.filter(Q(professional__user_id__username=username) and ~Q(client__user_id__username = client))
            
            # import pdb; pdb.set_trace()
            serializer = GetRatingSerializer(review, many=True)
            return Response(serializer.data)
        except Rating.DoesNotExist:
            return Response (status=status.HTTP_404_NOT_FOUND)
        

'''
fetch all professional's reports
'''
class GetAllReports(APIView):
    permission_classes = (AllowAny,)
    def get(self, client, professional):
        reports = Report.objects.filter(Q(client != client) and Q(professional = professional))
        serializer = ReportSerializer(reports, many=True)
        return Response(serializer.data)



class GetMyReport(APIView):
    permission_classes = (AllowAny)
    def get(self, client):
        reports = Report.objects.filter(Q(client = client))
        serializer = ReportSerializer(reports, many=True)
    def get(self, request):
        reports = Report.objects.all()
        serializer = GetReportSerializer(reports, many=True)
        return Response(serializer.data)


'''
Report for professionals
'''
class ReportForProfessional(APIView):
    permission_classes=(IsAuthenticated, IsClientUser,)

    def current_user(self):
        user = self.request.user.client
        return user

    def post(self, request, username):
        try:
            professional = Professionals.objects.get(user_id__username=username)
            data = request.data.dict()

            data['client'] = self.current_user()
            data['professional'] = professional.user_id
            
            # print(data)
            
            # import pdb;pdb.set_trace()
            
            serializer = ReportSerializer(data=data)
            data = {}
            if serializer.is_valid():
                report = serializer.save()
                data['content']=report.content
                return JsonResponse({
                    "messages":"reported success",
                    "result":serializer.data
                })
                return Response(serializer.data)
            else:
                return Response(serializer.data)
        except Professionals.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'user does not exists'})
            # return HttpResponse('user does not exists')









'''
favoriate post 
'''

class AddFavoriteForProfessional(APIView):
    permission_classes=(IsAuthenticated, IsClientUser,)

    def current_user(self):
        user = self.request.user.client
        return user

    def post(self, request, username):
        try:
            professional = Professionals.objects.get(user__username=username)
            data = request.data

            data['client'] = self.current_user()
            data['professional'] = professional.user_id

            
            already_favorited = Favourite.objects.filter(client=self.current_user(), professional=professional.user_id)
            if already_favorited:
                return JsonResponse({"message":'already favorited'})
            
            serializer = FavouriteSerializer(data=data)
            data = {}
            if serializer.is_valid():
                report = serializer.save()
                return JsonResponse({
                    "messages":"favorited success",
                    "result":serializer.data
                })
            return Response(serializer.data)
        except Professionals.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'user does not exists'})





'''
Favoriate delete
'''
class DeleteFavoriate(APIView):
    permission_classes=(IsAuthenticated, IsClientUser,)

    def delete(self, request, id):
        try:
            favoriate = Favourite.objects.get(id=id)
            favoriate.delete()
            return JsonResponse({"message":"favoriate deleted successful.", "status":status.HTTP_200_OK})
        except Favourite.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'favoriate does not exists'})




class GetFavorite(APIView):
    permission_classes = (IsAuthenticated, IsClientUser)

    def get(self, request, professional, client):
        try:
            favorite = Favourite.objects.filter(Q(professional__user_id__id=professional) and Q(client__user_id__id = client))
            
            # import pdb; pdb.set_trace()
            serializer = FavouriteSerializer(favorite, many=True)
            return Response(serializer.data)
        except Favourite.DoesNotExist:
            return Response (status=status.HTTP_404_NOT_FOUND)         



'''
list  all favoriated professionals
'''
class GetAllFavoriatedProfessionals(APIView):
    permission_classes = (IsAuthenticated, IsClientUser,)
    def get(self, request):
        hires = Favourite.objects.filter(client=request.user.client)
        # import pdb; pdb.set_trace()
        serializer = GetFavouriteSerializer(hires, many=True)
        return Response(serializer.data)


class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer
    lookup_field = 'username'
