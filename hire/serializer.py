from rest_framework import serializers

from users.models import Professionals, User
from .models import HireProfessional
from users.serializers import UserSerializer, ProfessionalSerializer, ClientSerializer


class HireProfessionalSerializer(serializers.ModelSerializer):
    # professional = ProfessionalSerializer(many=True)
    # hire_end_date_time = serializers.DateTimeField(format="%Y/%m/%dT%H:%M:%S", required=False)

    class Meta:
        model = HireProfessional
        fields = ['id','client', 'professional', 'hire_start_date_time', 'hire_end_date_time']



class GetHireProfessionalSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    professional = ProfessionalSerializer()
    class Meta:
        model = HireProfessional
        fields = ['id','client', 'professional', 'hire_start_date_time', 'hire_end_date_time']

