# Generated by Django 3.0.7 on 2020-06-07 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application_form', '0005_applicationform_birth_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicationform',
            name='birth_date',
            field=models.DateField(max_length=100),
        ),
    ]