const humanButton = document.querySelector("#button1");
            const computerButton = document.querySelector("#button2");
            const scoreButton = document.querySelector("#button3");
            const container = document.querySelector("#container");
            const form = document.querySelector("form");
            const input = document.querySelector("input");
            let span = document.querySelector("#input-text");
            let cSpan = document.querySelector("#computer-text");

            humanButton.addEventListener("click", humanBtn);

            function humanBtn(e) {
                e.preventDefault();
                let userInput = input.value
                form.reset();
                input.focus();
                span.textContent = "You Picked:           " + userInput;
            };

            computerButton.addEventListener("click", getComputerChoice);

            function getComputerChoice() {
                const randomChoice = Math.ceil(Math.random() * 3);
                let computerPick = "";

                if (randomChoice === 1) {
                    computerPick = "rock";
                    cSpan.textContent = "Computer Picked: " + computerPick;
                    return computerPick;

                } else if (randomChoice === 2) {
                    computerPick = "paper";
                    cSpan.textContent = "Computer Picked: " + computerPick;
                    return computerPick;

                } else {
                    computerPick = "scissors";
                    cSpan.textContent = "Computer Picked: " + computerPick;
                    return computerPick;
                };
            };