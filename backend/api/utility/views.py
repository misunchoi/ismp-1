"""Utility views that don't necessarily correspond to a model"""
from django.http import HttpResponse


def ping_view(request):
    """Should return 200 if hit. For the load balancer."""
    return HttpResponse('pong')
