# actor
from actor.renderers.custom_html_renderer import CustomHTMLRenderer

# rest framework
from rest_framework import renderers, views
from rest_framework.response import Response
from rest_framework.reverse import reverse


class HomePageView(views.APIView):
    """
    home page view
    """
    template_name = "index.html"
    renderer_classes = (CustomHTMLRenderer,
                    renderers.JSONRenderer,
                    renderers.BrowsableAPIRenderer)

    def get(self, request, *args, **kwargs):
        response = Response()
        return response
