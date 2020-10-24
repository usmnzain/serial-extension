"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectMenuContribution = exports.ConnectCommandContribution = void 0;
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
var serialport = require('serialport');
var ConnectCommand = {
    id: 'connect-command',
    label: 'ttyUSB1'
};
var ConnectCommand2 = {
    id: 'connect-command2',
    label: 'ttyUSB2'
};
var ConnectCommandContribution = /** @class */ (function () {
    function ConnectCommandContribution() {
    }
    ConnectCommandContribution.prototype.registerCommands = function (commands) {
        commands.registerCommand(ConnectCommand, {
            execute: function () {
                serialport.list(function (err, ports) {
                    ports.forEach(function (port) { return console.log(port); });
                });
            }
        });
        commands.registerCommand(ConnectCommand2, {
            execute: function () {
                console.log('Sending data on /dev/ttyUSB2!');
            }
        });
    };
    ConnectCommandContribution = __decorate([
        inversify_1.injectable()
    ], ConnectCommandContribution);
    return ConnectCommandContribution;
}());
exports.ConnectCommandContribution = ConnectCommandContribution;
var ConnectMenuContribution = /** @class */ (function () {
    function ConnectMenuContribution() {
    }
    ConnectMenuContribution.prototype.registerMenus = function (menus) {
        var connectMenuPath = __spread(common_1.MAIN_MENU_BAR, ['connect-menu']);
        menus.registerSubmenu(connectMenuPath, 'Connect', {
            order: '8'
        });
        menus.registerMenuAction(connectMenuPath, {
            commandId: ConnectCommand.id,
            order: '0'
        });
        menus.registerMenuAction(connectMenuPath, {
            commandId: ConnectCommand2.id,
            order: '1'
        });
    };
    ConnectMenuContribution = __decorate([
        inversify_1.injectable()
    ], ConnectMenuContribution);
    return ConnectMenuContribution;
}());
exports.ConnectMenuContribution = ConnectMenuContribution;
//# sourceMappingURL=menu-extension-contribution.js.map