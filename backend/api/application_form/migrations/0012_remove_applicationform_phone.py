# Generated by Django 3.0.7 on 2020-06-16 04:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('application_form', '0011_auto_20200616_0402'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='applicationform',
            name='phone',
        ),
    ]