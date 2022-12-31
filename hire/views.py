from decimal import ExtendedContext
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.db.models import Q

from .models import HireProfessional
from .serializer import HireProfessionalSerializer, GetHireProfessionalSerializer
from users.permission import IsClientUser, IsProfessionalUser
from users.models import User, Professionals, Client

from datetime import date, datetime
from django.utils import timezone




# Create your views here.





class HireProfessionalCreateApp(APIView):
    permission_classes = (IsAuthenticated, IsClientUser,)

    def current_user(self):
        user = self.request.user.client
        return user


    

    def post(self, request, username, *args, **kwargs):
        try:
            professional = Professionals.objects.get(user__username=username)
            data = request.data
            
            data['client'] = self.current_user()
            data['professional'] = professional.user_id

            serializer = HireProfessionalSerializer(data=data)
            # import pdb; pdb.set_trace()
            if serializer.is_valid():
                hire = serializer.save()
                hire.save()
                                    
                return JsonResponse ({
                    "message":"professional hired success.",
                    "success" : True,
                    "result" : serializer.data,
                    "status" : status.HTTP_201_CREATED
                })
            else:
                data = serializer.errors
                print(data)


            return Response(serializer.data)

            
            # try:
                # store_datetime = HireProfessional.objects.get(Q(client=request.user.client) & Q(professional=professional.user_id) )
                # # import pdb; pdb.set_trace()

                # end_datetime = datetime.strftime(store_datetime.hire_end_date_time, '%Y-%m-%d %H.%M.%S')
                # datetime_now = datetime.now()
                # current_datetime = datetime.strftime(datetime_now, '%Y-%m-%d %H:%M:%S')

                # if end_datetime>current_datetime:
                #     print("expired")
                #     def delete():
                #         try:
                #             already_hired = HireProfessional.objects.get(client=self.get_user(), professional=professional.user_id)
                #             id = already_hired.id
                #             print(id)
                #             id.delete()
                #         except:
                #             print("not found")
                #     delete()
                    

                # else:
                #     print("due")
                # return JsonResponse({"message":"already hired"})
                    
                        

                    
            # except HireProfessional.DoesNotExist:


                # serializer = HireProfessionalSerializer(data=data)
                # data = {}
                # if serializer.is_valid():
                #     hire = serializer.save()
                                    
                #     return JsonResponse ({
                #         "message":"professional hired success.",
                #         # "remaning_time":remaning_datetime,
                #         "success" : True,
                #         "result" : serializer.data,
                #         "status" : status.HTTP_201_CREATED
                #     })
                # else:
                #     data = serializer.errors
               


            # import pdb; pdb.set_trace()
            # try:
                
            # except HireProfessional.DoesNotExist:
            #     return Response(status=status.HTTP_404_NOT_FOUND)

        except Professionals.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'professional does not exists'})



'''
partial update HireProfessional
'''
class UpdateHireProfessional(APIView):
    permission_classes=(IsAuthenticated, IsClientUser,)

    def patch(self, request, pk):
        try:
            instance = HireProfessional.objects.get(id=pk)
            serializer = HireProfessionalSerializer(data=request.data, instance=instance, partial=True)
            data = {}
            if serializer.is_valid():
                hire = serializer.save()
                
                return JsonResponse({
                    "messages":"Hire professional updated ! ",
                    "result":serializer.data
                })
                
            return Response(serializer.data)
        except HireProfessional.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'Review does not exists'})
        


'''
HireProfessional delete
'''
class DeleteHireProfessional(APIView):
    permission_classes=(IsAuthenticated, IsClientUser,)

    def delete(self, request, id):
        try:
            hire = HireProfessional.objects.get(id=id)
            hire.delete()
            return JsonResponse({"message":"favoriate deleted successful.", "status":status.HTTP_200_OK})
        except HireProfessional.DoesNotExist:
            return JsonResponse ({"status":status.HTTP_404_NOT_FOUND, 'message':'favoriate does not exists'})





'''
list  all hires by client
'''
class GetAllHires(APIView):
    permission_classes = (IsAuthenticated, IsClientUser,)
    def get(self, request):
        hires = HireProfessional.objects.filter(client=request.user.client)
        serializer = GetHireProfessionalSerializer(hires, many=True)
        return Response(serializer.data)



class GetHireDataByID(APIView):
    permission_classes = (IsAuthenticated, IsClientUser)
    def get(self, request, id):
        hire = HireProfessional.objects.get(id = id)
        serializer = GetHireProfessionalSerializer(hire, many = False)
        return Response(serializer.data)






'''
Get hired specific user and professional
'''
class GetHiredSpecificProfessional(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, username):
        try:
            hired = HireProfessional.objects.filter(professional__user_id__username=username)
            serializer = GetHireProfessionalSerializer(hired, many=True)
            return Response(serializer.data)
        except HireProfessional.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


