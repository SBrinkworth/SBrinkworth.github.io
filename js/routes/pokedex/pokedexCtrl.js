angular.module('pokeApp')
	.controller('pokedexCtrl', function($scope, pokeService, pa, pokedex) {
		$scope.pokedex = pokedex;
		$scope.pokemonSprite = 'http://www.transparenttextures.com/patterns/asfalt-light.png';

		$scope.selected = function(id) {
			pokeService.getPokemonData(id)
				.then(function(response) {
					$scope.selectedPokemon = response;
					$scope.descriptionId = $scope.selectedPokemon.descriptions[0].resource_uri.split('/');
					pokeService.getDescriptionData($scope.descriptionId[4])
						.then(function(response) {
							$scope.pokemonDescription = response;
						});
				});
			var url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
			$scope.pokemonSprite = url;
		};
	});
