"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dragon_add_form_1 = require('./forms/dragon-add-form');
var dragon_service_1 = require('../../services/dragon.service');
var DragonAdminComponent = (function () {
    function DragonAdminComponent() {
        this.title = 'Dragon Admin Page';
    }
    DragonAdminComponent = __decorate([
        core_1.Component({
            selector: 'dragon-admin',
            templateUrl: 'app/components/dragon/views/dragon-admin.component.html',
            directives: [dragon_add_form_1.DragonAddFormComponent],
            providers: [dragon_service_1.DragonService]
        }), 
        __metadata('design:paramtypes', [])
    ], DragonAdminComponent);
    return DragonAdminComponent;
}());
exports.DragonAdminComponent = DragonAdminComponent;
//# sourceMappingURL=dragon-admin.component.js.map