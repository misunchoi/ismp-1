# Generated by Django 3.0.7 on 2020-06-16 04:02

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application_form', '0010_auto_20200613_2121'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='applicationform',
            name='birth_date',
        ),
        migrations.AddField(
            model_name='applicationform',
            name='birth_year',
            field=models.IntegerField(default=1900, validators=[django.core.validators.MaxValueValidator(9999), django.core.validators.MinValueValidator(1000)]),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='school_city',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]