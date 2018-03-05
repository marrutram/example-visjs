const myController = function ($scope, $timeout) {
  const templateAngular = `<table>
  <tr>
    <td>#</td>
    <td>nombre</td>
    <td>apellido</td>
    <td>apellido</td>
    <td>apellido</td>
    <td>apellido</td>
    <td>apellido</td>

    <td>apellido</td>
  </tr>
  <tr>
    <td>1</td>
    <td>alguien</td>
    <td>unApellido</td>
  </tr>
  </tr>
  <tr>
    <td>2</td>
    <td>somebody</td>
    <td>talkMe</td>
  </tr>
  <tr>
    <td>3</td>
    <td>looks</td>
    <td>likeAGirl</td>
  </tr>
</table>`;
  function getGroups() {
    return [
      {
        id: "1",
        content: templateAngular,
        nestedGroups: ["1.1"],
        // Optional: a field 'className', 'style', 'order', [properties]
      },
      {
        id: "1.1",
        content: 'Un task del wp 1',
        nestedGroups: ["1.2"],
      },
      {
        id: "1.2",
        content: 'un hermoso y radiante labor',
      },
    ];
  }
  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
    { id: 1, content: 'WP 1', start: '2013-04-20', end: '2013-04-22', group: "1"},
    { id: 2, content: 'Una task del wp 1', start: '2013-04-20', end: '2013-04-21', group: "1.1"},
    { id: 3, content: 'Una hermoso y radiante labor', start: '2013-04-20', end: '2013-04-20', group: "1.2"}

  ]);

  // Configuration for the Timeline
  var options = {
  };
  var groups = getGroups();

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, new vis.DataSet(groups), options);
  $timeout(function() {
    console.log('ciaisisi')
    $scope.$digest();
  },5000);
}


angular.module('algo',[])
  .controller('myController', myController);