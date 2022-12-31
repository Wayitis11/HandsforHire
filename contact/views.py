from django.shortcuts import render
from .serializers import ContactSerializers
from rest_framework import ISO_8601, serializers, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
from django.http.response import JsonResponse
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.



class Contact(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        serializer = ContactSerializers(data=request.data)
        data = {}
        if serializer.is_valid():
            contact = serializer.save()
            contact.save()
            data['FullName'] = contact.FullName
            data['Email'] = contact.Email

            return JsonResponse({
                'message': "your message has been sent",
                "success" : True,
                "result" : serializer.data,
                "status" : status.HTTP_200_OK
            })
        else:
            data = serializer.errors
        return JsonResponse({'message':'contact serializer response', 'response': serializer.data}) 