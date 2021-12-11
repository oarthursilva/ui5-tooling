sap.ui.define([
  './BaseController',
  'sap/ui/model/json/JSONModel'
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    'use strict';

    return Controller.extend('com.br.ui5tooling.controller.Main', {

      /**
       * Called when a controller is instantiated and its View controls (if available) are already created.
       * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time 
       * initialization.
       * 
       * @memberOf com.br.ui5tooling.controller.Main
       */
      onInit: function () {
        const data = {
          name: ''
        };
        var model = new JSONModel(data);

        this.setModel(model);

        this._dialogRequest();

      },

      /**
       * Fired when dialog close is pressed
       * 
       * @param {sap.ui.base.Event} event 
       * 
       * @memberOf com.br.ui5tooling.controller.Main
       * @public
       */
      handleCloseDialog: function (event) {
        const source = event.getSource();
        const dialog = source.getParent();

        dialog.close();
      },

      _dialogRequest: function () {
        if (!this.dialog) {
          this.dialog = this.loadFragment({
            name: 'com.br.ui5tooling.commons.fragments.Dialog'
          });
        }

        this.dialog.then(function (event) {
          event.open();
        });

      },
    });
  });
