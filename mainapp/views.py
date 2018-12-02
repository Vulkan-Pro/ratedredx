from django.shortcuts import render

# Create your views here.

def index(request, template_name='index.html'):
	


	return render(request, template_name, {})


def events(request, template_name="events.html"):

	return render(request, template_name, {})


def contact(request, template_name="contact-us.html"):

	return render(request, template_name, {})
	

def services(request, template_name="services.html"):

	return render(request, template_name, {})