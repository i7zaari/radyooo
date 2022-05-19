(
    () => {
        const searchbox = document.getElementById("searchbox")
        const items = document.querySelectorAll("#stations li:not([aria-hidden])")

        searchbox.addEventListener(
            "input",
            () => {
                items.forEach(
                    item => {
                        const station = item.querySelector("a")
                        const name = station.querySelector("h2").textContent

                        if (!name.includes(searchbox.value)) {
                            item.classList.add("not-found")
                            station.setAttribute("tabindex", "-1")
                        } else {
                            item.classList.remove("not-found")
                            station.removeAttribute("tabindex")
                        }
                    }
                )
            }
        )
    }
)()