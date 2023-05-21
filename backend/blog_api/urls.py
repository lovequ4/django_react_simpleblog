from django.urls import path,include
from .views import BlogApiView,CategoryApiView,CategoryPostApiView,PopularPostsApiView
from rest_framework import routers

router = routers.SimpleRouter()
router.register('blogs',BlogApiView,basename='blogs')
router.register('category',CategoryApiView,basename='category')
router.register('categoryBaseBlogs',CategoryPostApiView,basename='categoryBaseBlogs')
router.register('popularposts',PopularPostsApiView,basename='popularposts')

urlpatterns = [
    path('',include(router.urls))
]


