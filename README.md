# Rock-Paper-Scissors-Firebase
Multiplayer rock,paper,scissors using firebase and Jquery

# Singleplayer
2 timers alternating between a dueling phase and a intermission phase displaying their respective messages.

Start button begins the duel phase timer, reset button if you get unlucky

The game logic function starts at the start of the intermission (the immediete end of the duel phase), randomly selecting a option for the AI and comparing it to the player.

The scores change, the intermission finishes and the duel phase begins again

# Multiplayer

uses the same basic functionality as the singleplayer, but using firebase database to expand for multiplayer activity

player 1 that handles all the game logic and processing, player 2 recieves updates and messages from firebase
