const myController = function ($scope, $timeout) {
  const templateHeaders = `
  <table>
    <td>#</td>
    <td>nombre</td>
    <td>apellido</td>
    <td>apellido</td>
    <td>apellido</td>
    <td>apellido</td>
    <td>apellido</td>

    <td>apellido</td>
  </table>`
  const templateAngular = `<table border="1">
  <tr>
    <td>1</td>
    <td>alguien</td>
    <td>unApellido</td>
    <td>apellido</td>
    <td>apellido</td>
    <td>apellido</td>
    <td>apellido</td>

    <td>apellido</td>
  </tr>
</table>`;
  function getGroups() {
    return [
      {
        id: "1",
        content: templateHeaders,
        nestedGroups: ["1.1"],
        // Optional: a field 'className', 'style', 'order', [properties]
      },
      {
        id: "1.1",
        content: templateAngular,
        nestedGroups: ["1.2"],
      },
      {
        id: "1.2",
        content: templateAngular,
      },
    ];
  }
  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  const temp = [];
  const group = [];
  for (x=0; x < 3000; x++) {
    const newGroup = 'facyGroud' + x;
    group.push({id: newGroup, content: templateAngular})
    temp.push({id: x, content: 'WP ' + x, start: '2013-04-20', end: '2013-04-21', group:newGroup })
  }
  var items = new vis.DataSet(temp);

  // Configuration for the Timeline
  var options = {
  };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, new vis.DataSet(group), options);
  $timeout(function() {
    console.log('ciaisisi')
    $scope.$digest();
  },5000);
}


angular.module('algo',[])
  .controller('myController', myController);