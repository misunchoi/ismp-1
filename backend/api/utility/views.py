"""Utility views that don't necessarily correspond to a model"""
import logging
from django.http import HttpResponse

LOGGER = logging.getLogger(__name__)

def ping_view(request):
    """Should return 200 if hit. For the load balancer."""
    LOGGER.debug(request)
    return HttpResponse('pong')
