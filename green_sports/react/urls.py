from django.urls import path

from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('axios/',views.axios_call, name='axios')
]