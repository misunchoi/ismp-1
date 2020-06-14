import os
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'h9s33#kz!cjf#h=bepvwdd10f$7w9)=slne4nndd!isr&i=2d-'

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'ismpdb',
        'PORT': 5432,
    }
}

ALLOWED_HOSTS = []

# AWS settings
USE_S3 = False  # change this to true and populate the following fields to upload to s3.
AWS_ACCESS_KEY_ID = "INSERT YOUR AWS ACCESS KEY ID HERE"
AWS_SECRET_ACCESS_KEY = "INSERT YOUR AWS SECRET ACCESS KEY HERE"
AWS_STORAGE_BUCKET_NAME = "INSERT THE NAME OF THE S3 BUCKET YOU CREATED HERE"
# MailChimp Settings
USE_MAILCHIMP_FROM_ENV = False
if USE_MAILCHIMP_FROM_ENV:
    # mailchimp credentials can be added by using environment variables
    USE_MAILCHIMP = True
    MAILCHIMP_USERNAME = os.getenv('MAILCHIMP_USERNAME')
    MAILCHIMP_API_KEY = os.getenv('MAILCHIMP_API_KEY')
    MAILCHIMP_LIST_ID = os.getenv('MAILCHIMP_LIST_ID')
else:
    # Use these settings if you don't want to bother with env vars
    USE_MAILCHIMP = False
    MAILCHIMP_USERNAME = 'PUT YOUR USERNAME HERE'
    MAILCHIMP_API_KEY = 'INSERT YOUR MAILCHIMP API KEY HERE'
    MAILCHIMP_LIST_ID = 'INSERT YOUR MAILCHIMP LIST ID HERE'

# define this outside of the if block even if not using s3 to get
# rid of an annoying warning from boto3.
AWS_DEFAULT_ACL = "public-read"
if USE_S3:
    # aws settings
    AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
    AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400'}

    # s3 static settings
    STATIC_LOCATION = 'static'
    STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{STATIC_LOCATION}/'
    STATICFILES_STORAGE = 'api.upload.storage_backends.StaticStorage'
    # s3 public media settings
    PUBLIC_MEDIA_LOCATION = 'media'
    MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{PUBLIC_MEDIA_LOCATION}/'
    DEFAULT_FILE_STORAGE = 'api.upload.storage_backends.PublicMediaStorage'
    # s3 private media settings
    PRIVATE_MEDIA_LOCATION = 'private'
    PRIVATE_FILE_STORAGE = 'api.upload.storage_backends.PrivateMediaStorage'
else:
    STATIC_URL = '/staticfiles/'
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')
    MEDIA_URL = '/mediafiles/'
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
