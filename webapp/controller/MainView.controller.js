sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (BaseController) => {
    "use strict";

    return BaseController.extend("martindls.invoices.controller.MainView", {
        onInit() {
            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONModel.loadData("/model/selectionScreenMenu.json");
            oView.setModel(oJSONModel, "selectionScreenMenu");
        },


        onFilter(oEvent) {

        },
        

        onClearFilter() {
            const oModelSelScreen = this.getView().getModel("selectionScreenMenu");
            oModelSelScreen.setProperty("/ShipName", "");
            oModelSelScreen.setProperty("/CountryKey", "");
        }
    });
});