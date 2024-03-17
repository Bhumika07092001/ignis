from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('',views.global_events),
    path('signup/',views.register),
    path('login/', views.user_login),
    path('createEvent/',views.EventList.as_view),
    path('liked/',views.liked),
    path('likedEvents/',views.user_specific_events),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)