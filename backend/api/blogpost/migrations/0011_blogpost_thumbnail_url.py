# Generated by Django 3.0.7 on 2020-06-11 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogpost', '0010_topic_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='thumbnail_url',
            field=models.URLField(blank=True, max_length=1000),
        ),
    ]