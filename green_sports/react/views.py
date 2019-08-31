from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def index(request):
    return HttpResponse("Hello Django World")

def axios_call(request):
    return JsonResponse({'key':'value'})