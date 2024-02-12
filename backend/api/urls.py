from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('events/',views.getEvents, name="events"),
    path('create_event/',views.createEvent, name="eventcreate"),
]