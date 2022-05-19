(
    () => {
        new URL(
            "/src/images/favicons/error.svg",
            import.meta.url
        )
        new URL(
            "/src/images/favicons/active.svg",
            import.meta.url
        )

        const stations = document.querySelectorAll("#stations a")
        const audios = stations[0].parentElement.parentElement.querySelectorAll("audio")

        const initial_title = document.title

        stations.forEach(
            (station, active) => {
                station.addEventListener(
                    "click",
                    () => {
                        for (let inactive = 0; inactive < stations.length; inactive++) {
                            if (inactive === active) {
                                continue
                            }

                            audios[inactive].pause()

                            if (stations[inactive].className !== "error") {
                                stations[inactive].removeAttribute("class")
                            }
                        }

                        function favicon(favicon) {
                            return document.querySelector("[rel*=icon]").href = `images/${favicon}.svg`
                        }

                        if (audios[active].paused) {
                            audios[active].play()

                            audios[active].onwaiting = () => {
                                station.className = "waiting"
                                favicon("inactive")
                            }

                            audios[active].onerror = () => {
                                station.className = "error"
                                station.setAttribute("tabindex", "-1")
                                favicon("error")
                            }

                            audios[active].onplaying = () => {
                                station.className = "playing"
                                favicon("active")
                            }

                            let title = `${station.querySelector("h2").textContent} • ${initial_title}`

                            if (document.title !== title) {
                                document.title = title
                            }
                        } else {
                            audios[active].pause()
                            station.removeAttribute("class")
                            favicon("inactive")
                        }
                    }
                )
            }
        )
    }
)()