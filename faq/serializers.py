
from rest_framework import serializers
from .models import Faq

class FaqSerializers(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = ('__all__')

        