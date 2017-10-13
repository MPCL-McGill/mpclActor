# actor
from actor.renderers.custom_html_renderer import CustomHTMLRenderer

# rest framework
from rest_framework import renderers, views
from rest_framework.response import Response
from rest_framework.reverse import reverse


class AboutView(views.APIView):
    """
    about page view
    """
    template_name = "about.html"
    renderer_classes = (CustomHTMLRenderer,
                        renderers.JSONRenderer,
                        renderers.BrowsableAPIRenderer)

    def get(self, request, *args, **kwargs):
        response = Response({
            'home': 'home',
        })
        return response
