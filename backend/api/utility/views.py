"""Utility views that don't necessarily correspond to a model"""
from django.http import HttpResponse
import logging

logger = logging.getLogger(__name__)

def ping_view(request):
    """Should return 200 if hit. For the load balancer."""
    logger.debug("health check")
    logger.debug(request)
    return HttpResponse('pong')
