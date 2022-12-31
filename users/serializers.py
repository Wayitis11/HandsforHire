
from django.db.models import fields
from rest_framework import serializers
from .models import Rating, User, Client, Professionals, Skill, PROFESION_CHOICES, Report, Favourite

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer




'''
skill serilaizer
'''
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'




'''
client register serilizer
'''
class CustomClientRegisterSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(style={'input_type':'text'})
    last_name = serializers.CharField(style={'input_type':'text'})
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields = ('id','email', 'username', 'password', 'password2', 'first_name', 'last_name')


    def save(self):
        
        client = User(
            email = self.validated_data['email'],
            username = self.validated_data['username'],
        )

        client.is_client = True
        # client.is_active = False

        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password':'password must match. '})
        
        client.set_password(password)
        client.save()

        client_profile =  Client.objects.create(user=client)
        client_profile.first_name = self.validated_data['first_name']
        client_profile.last_name = self.validated_data['last_name']
        client_profile.save()

        return client


'''
client profile serilizer
'''
class ClientSerializer(serializers.ModelSerializer):
    profilePicture = serializers.ImageField(allow_empty_file=True, use_url='client/profiles', required=False)
    class Meta:
        model = Client
        fields = ['user_id', 'first_name', 'last_name', 'phone_number', 'profilePicture']



'''
professional register serilizer
'''
class CustomProfessionlRegisterSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(style={'input_type':'text'})
    last_name = serializers.CharField(style={'input_type':'text'})
    profession = serializers.ChoiceField(choices=PROFESION_CHOICES, required=False)
    about_me = serializers.CharField(style={'input_type':'text'})
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 'password2', 'first_name', 'last_name', 'profession', 'about_me')


    def save(self):
        
        professional = User(
            email = self.validated_data['email'],
            username = self.validated_data['username']
        )

        professional.is_professional = True

        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password':'password must match. '})
        
        professional.set_password(password)
        professional.save()

        professional_profile =  Professionals.objects.create(user=professional)
        professional_profile.profession = self.validated_data['profession']
        professional_profile.first_name = self.validated_data['first_name']
        professional_profile.last_name = self.validated_data['last_name']
        professional_profile.about_me = self.validated_data['about_me']
        
        professional_profile.save()

        return professional



'''
professional profile serilizer
'''
class ProfessionalSerializer(serializers.ModelSerializer):
    profilePicture = serializers.ImageField(allow_empty_file=True, use_url='professional/profiles', required=False)
    skill=serializers.CharField(required=False)
    # skill = SkillSerializer(many=True,read_only=True)
    skill = serializers.CharField(required = False)
    class Meta:
        model = Professionals
        fields = ['user_id', 'first_name', 'last_name', 'profilePicture', 'profession', 'phone_number', 'experience', 'skill', 'charge_fee', 'about_me']


    # def save(self):
    #     professional = Professionals(
    #         user_id=self.context['request'].user.professional.user_id,
    #         first_name=self.validated_data['first_name'],
    #         last_name=self.validated_data['last_name'],
    #         profession=self.validated_data['profession'],
    #         phone_number=self.validated_data['phone_number'],
    #         experience=self.validated_data['experience'],
    #         charge_fee=self.validated_data['charge_fee'],
    #         # skill = self.validated_data['skill'],
    #         about_me = self.validated_data['about_me']

    #     )
    
    #     professional.save()

    #     return professional










'''
custom token pair serializer
'''
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        token = self.get_token(self.user)
        # print("my token", token)
        data['user'] = self.user.username
        data['id'] = self.user.id
        data['is_client'] = self.user.is_client
        data['is_professional'] = self.user.is_professional
        return data



'''
rating serializer
'''
class RatingSerializer(serializers.ModelSerializer):
    # client = ClientSerializer()
    # professional = ProfessionalSerializer()
    class Meta:
        model = Rating
        fields = ['id', 'client', 'professional', 'stars', 'comment']
        # depth = 1


        # def save(self):
        #     professional = Professionals(
        #     user_id=self.context['request'].user.professional.user_id,
        #     first_name=self.validated_data['first_name'],
        #     last_name=self.validated_data['last_name'],
        #     profession=self.validated_data['profession'],
        #     phone_number=self.validated_data['phone_number'],
        #     experience=self.validated_data['experience'],
        #     charge_fee=self.validated_data['charge_fee'],
        #     # skill = self.validated_data['skill'],
        #     about_me = self.validated_data['about_me']

        # )
    
        #     professional.save()

        #     return professional


class GetRatingSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    professional = ProfessionalSerializer()
    class Meta:
        model = Rating
        fields = ['id', 'client', 'professional', 'stars', 'comment']




'''
Report Serializer
'''
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['id', 'client', 'professional', 'content']


class GetReportSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    professional = ProfessionalSerializer()
    class Meta:
        model = Report
        fields = ['id', 'client', 'professional', 'content']







'''
Favourite Serializer
'''
class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourite
        fields = ['id', 'client', 'professional']



class GetFavouriteSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    professional = ProfessionalSerializer()
    class Meta:
        model = Favourite
        fields = ['id', 'client', 'professional']
        









'''
user serializer
'''
class UserSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    professional = ProfessionalSerializer()
    class Meta:
        model = User
        fields = ('id','email', 'username', 'is_client', 'is_professional', 'client', 'professional')


class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):

        instance.set_password(validated_data['password'])
        instance.save()

        return instance
