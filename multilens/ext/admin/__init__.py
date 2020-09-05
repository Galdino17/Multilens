from flask_admin import Admin

from multilens.ext.db import db
from multilens.ext.db.models import Speciality, Storage, User, Balance

from .models import (AdminView, SpecialityModelView, StorageModelView,
                     UserModelView, BalanceModelView)

admin = Admin(index_view=AdminView())


def init_app(app):
    admin.name = app.config.get("ADMIN_NAME", "Multilens")
    admin.url = "/"
    admin.index_view.is_visible = lambda: False
    admin.template_mode = app.config.get("ADMIN_TEMPLATE_MODE", "bootstrap3")
    admin.add_view(UserModelView(User, db.session, "Funcionarios"))
    admin.add_view(SpecialityModelView(Speciality, db.session, "Especialidade"))
    admin.add_view(StorageModelView(Storage, db.session, "Produtos"))
    admin.add_view(BalanceModelView(Balance, db.session, "Estoque"))

    admin.init_app(app)
