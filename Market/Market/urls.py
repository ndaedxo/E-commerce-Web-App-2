# Back-end\ThriftStore\ThriftStore\urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import (
    CategoryViewSet, ProductViewSet, OrderViewSet, OrderItemViewSet,
    PaymentViewSet, CartViewSet, CartItemViewSet, ReviewViewSet,
    WishlistViewSet, WishlistItemViewSet, ShippingViewSet, home
)

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'carts', CartViewSet)
router.register(r'cart-items', CartItemViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'wishlists', WishlistViewSet)
router.register(r'wishlist-items', WishlistItemViewSet)
router.register(r'shipping', ShippingViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', home, name='home'),  # Uncomment this if you want the home view to be the root URL
    path('', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
