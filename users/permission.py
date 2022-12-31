from rest_framework import permissions


class IsClientUser(permissions.BasePermission):
    message = 'please login as client'
    def has_permission(self, request, view):
        return request.user and request.user.is_client

    def has_object_permission(self, request, view, obj):
        return request.user and request.user.is_client



class IsProfessionalUser(permissions.BasePermission):
    message = 'please login as professional'
    def has_permission(self, request, view):
        return request.user and request.user.is_professional

    def has_object_permission(self, request, view, obj):
        return request.user and request.user.is_professional