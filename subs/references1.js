fetch("./bibliography.json")
    .then(response => response.json())
    .then(bibData => {
        document.querySelectorAll(".reference").forEach(refElement => {
            const entryId = refElement.id;
            const entry = bibData[entryId];
            const style = refElement.getAttribute("style");

            if (entry) {
                const authors = entry.author.split(" and ");
                const firstSurname = authors[0].split(",")[0].trim();

                const inlineText = style === "p"
                    ? `(${firstSurname}, ${entry.year})`
                    : `${firstSurname} (${entry.year})`;

                refElement.textContent = inlineText;
                refElement.style.display = "inline";

                createTooltip(refElement, `${entry.author} (${entry.year}). ${entry.title}. ${entry.publisher}.`);
            }
        });

        document.querySelectorAll(".footnote").forEach(footnoteElement => {
            const word = footnoteElement.getAttribute("word");
            const footnoteContent = footnoteElement.innerHTML.trim();

            if (word && footnoteContent) {
                const wordSpan = document.createElement("span");
                wordSpan.textContent = word;
                wordSpan.style.textDecoration = "underline";
                wordSpan.style.cursor = "pointer";
                wordSpan.style.color = "gray";

                createTooltip(wordSpan, footnoteContent, true);
                footnoteElement.replaceWith(wordSpan);
            }
        });
    })
    .catch(error => console.error("Error loading bibliography", error));

function createTooltip(targetElement, content, isHTML = false) {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip-box";

    if (isHTML) {
        tooltip.innerHTML = content;
    } else {
        tooltip.textContent = content;
    }

    tooltip.style.display = "none";
    tooltip.style.position = "fixed";
    tooltip.style.backgroundColor = "#f9f9f9";
    tooltip.style.border = "1px solid #ccc";
    tooltip.style.padding = "10px";
    tooltip.style.width = "450px";
    tooltip.style.zIndex = "100";
    tooltip.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    tooltip.style.fontSize = "0.75em";
    tooltip.style.lineHeight = "1.4";
    tooltip.style.marginTop = "5px";
    tooltip.style.wordWrap = "break-word";
    document.body.appendChild(tooltip);

    let hideTimeout;

    targetElement.addEventListener("mouseenter", (event) => {
        clearTimeout(hideTimeout);
        tooltip.style.display = "block";
        const tooltipHeight = tooltip.offsetHeight;
        tooltip.style.top = `${event.clientY - tooltipHeight - 10}px`;
        tooltip.style.left = `${event.clientX + 10}px`;
    });

    targetElement.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
            tooltip.style.display = "none";
        }, 200);
    });

    tooltip.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
    });

    tooltip.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
}