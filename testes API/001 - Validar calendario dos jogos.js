@Test
void shouldValidateBrazilVsFranceMatch() {

    assertEquals("Brazil", match.getHomeTeam());
    assertEquals("France", match.getAwayTeam());
    assertEquals("MetLife Stadium", match.getVenue());

}
