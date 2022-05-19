(
    () => {
        if (window.location.hash !== "") {
            const current = document.querySelector(`[href="${window.location.hash}"]`)

            current.scrollIntoView({
                block: "center"
            })
            current.focus()
        }
    }
)()