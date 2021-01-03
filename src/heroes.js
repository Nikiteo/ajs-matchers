export default function sortHeroes(oHeroes) {
  return oHeroes.sort((a, b) => b.health - a.health);
}
