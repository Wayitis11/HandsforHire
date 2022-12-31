from .models import Faq as fq
from django.shortcuts import render
from .serializers import FaqSerializers
from rest_framework import ISO_8601, serializers, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
from django.http.response import JsonResponse
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.



class Faqs(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
        faqs = fq.objects.all()
        serializer = FaqSerializers(faqs, many=True)
        return Response(serializer.data)



class Faq(APIView):
    permission_classes = (AllowAny,)
    def get(self, request, id):
        faq = fq.objects.get(id=id)
        serializer = FaqSerializers(faq)
        return Response(serializer.data)


