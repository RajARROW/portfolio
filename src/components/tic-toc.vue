<template>
  <div>
    <h1 class="text-primary dark:text-secondary uppercase font-bold text-lg md:text-xl mb-4">Tic-Tac-Toe</h1>
    <div class="mx-auto flex-wrap flex tictactoe-board justify-center">
      <div v-for="(n, i) in 3" :key="i">
        <div v-for="(n, j) in 3" :key="j">
          <app-cell @click="performMove(j, i)"
                :value="board.cells[j][i]"
          />
        </div>
      </div>

      <div class="text-primary dark:text-secondary game-over-text pt-4 md:pt-8 text-lg md:text-xl" v-if="gameOver">
        {{ gameOverText }}
      </div>
      <button class="px-6 py-2 text-xl border-2 rounded-full text-primary border-primary text-center hover:bg-primary_light hover:border-primary_light hover:text-primary md:text-1xl dark:border-secondary_light dark:text-secondary_light dark:hover:bg-secondary dark:hover:border-secondary dark:hover:text-secondary_dark mt-4 md:mt-8" @click="onRestart()" style="outline: none">Restart</button>
    </div>
  </div>
</template>
<script>
import Board from './Board'

export default {

  data () {
    return {
      gameOver: false,
      gameOverText: '',
      board: new Board()
    }
  },

  methods: {
    performMove (x, y) {
      if (this.gameOver) {
        return
      }

      if (!this.board.doMove(x, y, 'x')) {
        // Invalid move.
        return
      }

      this.$forceUpdate()

      if (this.board.isGameOver()) {
        this.gameOver = true
        this.gameOverText = this.board.playerHas3InARow('x') ? 'You win!' : 'Draw'
        return
      }

      let aiMove = this.minimax(this.board.clone(), 'o')
      this.board.doMove(aiMove.move.x, aiMove.move.y, 'o')

      if (this.board.isGameOver()) {
        this.gameOver = true
        this.gameOverText = this.board.playerHas3InARow('o') ? 'You lose!' : 'Draw'
      }

      this.$forceUpdate()
    },

    minimax (board, player, depth = 1) {
      // If the board has 3 in a row return the score of the board.
      if (board.isGameOver()) {
        return {
          score: board.getScore() + depth,
          move: null
        }
      }

      // The 'o' player wants to maximize its score, the 'x' player wants to
      // minimize its score.
      let bestScore = player === 'o' ? -10000 : 10000
      let bestMove = null

      let moves = board.getPossibleMoves()
      for (let i = 0; i < moves.length; i++) {
        let move = moves[i]
        let newBoard = board.clone()
        newBoard.doMove(move.x, move.y, player)

        // Recursively call the minimax function for the new board.
        const score = this.minimax(newBoard, player === 'x' ? 'o' : 'x', depth + 1).score

        // If the score is better than the best saved score update the best saved
        // score to this move.
        if ((player === 'o' && score > bestScore) || (player === 'x' && score < bestScore)) {
          bestScore = score
          bestMove = move
        }
      }

      // Return the best found score & move!
      return {
        score: bestScore,
        move: bestMove
      }
    },
    onRestart () {
      this.board = new Board()
      this.gameOver = false
      this.gameOverText = ''
    }
  }

}
</script>
<style>
  .tictactoe-board {
    width: 204px;
  }

  .game-over-text {
    font-weight: bold;
    width: 204px;
    text-align: center;
  }
</style>
