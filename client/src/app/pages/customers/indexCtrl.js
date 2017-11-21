/**
 * @author
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.customers')
      .controller('customersIndexCtrl', indexCtrl);

  /** @ngInject */
  function indexCtrl($state, Restangular, DTOptionsBuilder,
                     DTColumnDefBuilder,defaultOptionsDom,warningModalService
                     ,halService

  ) {

    var vm = this;
    vm.halService = halService;

    vm.edit = edit;
    vm.destroy = destroy;
    vm.loadData = loadData;



    vm.customers = [];
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withDOM(defaultOptionsDom)
        .withButtons([
            {
                text: '新增',
                className: 'btn btn-primary',
                key: '1',
                action: function (e, dt, node, config) {
                    $state.go('customers.new');
                }
            },
          'copy',
          'csv',
          'print'
        ])
    ;
    vm.dtColumnDefs = [
      // DTColumnDefBuilder.newColumnDef(0).withClass('select-checkbox').renderWith(function() {return '';}),
      DTColumnDefBuilder.newColumnDef(0).withClass('text-danger'),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2).notSortable()

    ];


    function loadData(){

        Restangular.all('customers').customGET().then(function(hal) {
            vm.hal = hal;
            // var link = hal.selfLink;
            vm.customers = hal._embedded.customers;

        });


    }


    function edit(item){

        // var id = halService.getId(item);
      $state.go('customers.edit',{
          id:halService.getId(item)
          // ,selfLink:halService.getSelfLink(item)
      });
    }

    function destroy(item){

        warningModalService.open(item).result.then(function(item) {
            //确定处理
            console.log('destroy at: ' + item);
            Restangular.one('/customers',halService.getId(item)).remove().then(function(hal) {
                vm.loadData();
            });
        });




    }
    //
    //function add() {
    //  //vm.customers.push(angular.copy(vm.Customer2Add));
    //  //vm.Customer2Add = _buildCustomer2Add(vm.Customer2Add.id + 1);
    //}
    //function modify(index) {
    //
    //}
    //function remove(index) {
    //  //vm.customers.splice(index, 1);
    //}


    function init(){
      loadData();
    }
    init();


  }

})();
