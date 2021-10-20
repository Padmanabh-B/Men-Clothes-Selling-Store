from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name = "paddu", 
                        email="paddu@paddu.com", 
                        is_staff = True,
                        is_superuser = True,
                        phone = "8050021764",
                        gender = "male"
                        )
        user.set_password("12345")
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data),
    ]