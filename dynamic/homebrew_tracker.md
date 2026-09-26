---
layout: default
permalink: /projects/homebrew_tracker.html
---
<style>
    .card
    {
        margin: 5px;
        width: 40rem;
    }

    .card:not(:last-child) { margin-right: 0px; }

</style>

<div class="container">
    <div class="row">
        <h1 class="col">Homebrew Tracker:</h1>
        <!-- Button trigger modal -->
        <div class="col">
            <button type="button" class="float-end btn btn-primary" data-bs-toggle="modal" data-bs-target="#exportModal" onclick="createExport()">
                Export Changes
            </button>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-group mb-3">
                <span class="input-group-text">Track</span>
                <input type="number" class="form-control" placeholder="4" id="new_homebrew_litres">
                <span class="input-group-text">L of</span>
                <input type="text" class="form-control" placeholder="Homebrew Name" id="new_homebrew_name">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="addHomebrew()">Add</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-group mb-3">
                <span class="input-group-text">Load Export</span>
                <input type="text" class="form-control" placeholder="eyJicmV3cyI6W3sibmFtZSI6IlN0cmF3YmVycnkiLCJ0b3RWb2x1..." id="import_export">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="importData()">Import</button>
            </div>
        </div>
    </div>
    <h2>Current Brews:</h2>
    <div class="row brew_cards" id="brew_root"> </div>
    <div class="modal fade" id="exportModal" tabindex="-1" aria-labelledby="exportModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exportModalLabel">Export Changes?</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="export_container" style="word-break: break-all;"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    const defaultLitres = 4;
    const split_sizes = [.25, .5, 1, 2];
    let data = {
        brews: []
    };

    const url_import = urlParam()["import"];
    if(url_import !== undefined && url_import.length > 0)
    {
        data = JSON.parse(atob(url_import));
    }

    const brew_root = document.getElementById("brew_root");
    const test = document.getElementById("test");

    function simpleCreate(kind, classes, children)
    {
        if(children === undefined) children = [];

        const elem = document.createElement(kind);

        if(Array.isArray(classes)) elem.classList.add(...classes);
        else elem.className = classes;

        for(const child of children)
            elem.appendChild(child);

        return elem;
    }

    function createSplitButtons(split, new_split_handler, lock_handler)
    {
        const split_group = simpleCreate("span", "btn-group");
        split_group.role = "group";

        for(const amount of split_sizes)
        {
            if(split.available === false || split.amount <= amount) continue;

            const button = simpleCreate("button", ["btn", "btn-outline-primary"], [document.createTextNode(`${amount.toString()}L`)]);
            button.dataset.split = amount.toString();

            button.addEventListener("click", new_split_handler);

            split_group.appendChild(button);
        }

        if(split.available === true)
        {
            const button = simpleCreate("button", ["btn", "btn-outline-primary"], [document.createTextNode(`🔒`)]);

            button.addEventListener("click", lock_handler);

            split_group.appendChild(button);
        }

        return split_group;
    }

    function createBrewSplit(split, new_split_handler, lock_handler)
    {
        const name_span = simpleCreate("span", "editable", [document.createTextNode(split.name)]);
        name_span.contentEditable = split.available ? "plaintext-only" : "false";
        name_span.addEventListener("input", (e) => {
            split.name = e.srcElement.innerText.replace(/\n/g, " ");
            list_item.dataset.name = split.name;
        });

        const badge = simpleCreate("span", ["badge", split.available ? "text-bg-primary" : "text-bg-warning", "rounded-pill"], [document.createTextNode(`${split.amount}L`)]);

        const list_item = simpleCreate("li", ["list-group-item", "d-flex", "justify-content-between", "align-items-center"], [name_span, badge]);
        list_item.dataset.name = split.name;
        list_item.dataset.value = split.amount;

        const split_group = createSplitButtons(split, new_split_handler, lock_handler);

        if(split_group.children.length > 0)
        {
            list_item.appendChild(simpleCreate("span", "split_text", [document.createTextNode("Split:")]));
            list_item.appendChild(split_group);
        }

        return list_item;
    }

    function refreshSplitButtons(data_brew_split, button_group, split_element, brew_split_handler, lock_handler)
    {
        const new_split_group = createSplitButtons(data_brew_split, brew_split_handler, lock_handler);
        button_group.remove();

        if(new_split_group.children.length >= 1) split_element.appendChild(new_split_group);
        else split_element.querySelector(".split_text").remove();
    }

    function createBrew(brew)
    {
        const card_title = simpleCreate("h5", "card-title", [document.createTextNode(brew.name)]);
        const card_text = simpleCreate("p", "card-title", [document.createTextNode(`${brew.totVolume}L`)]);
        const card_body = simpleCreate("div", "card-body", [card_title, card_text]);

        const list_group = simpleCreate("ul", ["list-group", "list-group-flush"]);
        const card = simpleCreate("div", "card", [card_body, list_group]);

        const lock_handler = (event) =>
        {
            const button = event.target;
            const button_group = button.parentElement;
            const split_element = button_group.parentElement;
            const split_name = split_element.dataset.name;

            const data_brew_split = brew.split.find(a => a.name === split_name);
            data_brew_split.available = false;

            refreshSplitButtons(data_brew_split, button_group, split_element, brew_split_handler, lock_handler);

            const badge = split_element.querySelector(".badge");
            badge.classList.replace("text-bg-primary", "text-bg-warning");

            const editable = split_element.querySelector(".editable");
            editable.contentEditable = "false"
        }

        const brew_split_handler = (event) =>
        {
            const button = event.target;
            const button_group = button.parentElement;
            const button_split = parseFloat(button.dataset.split);
            const split_element = button_group.parentElement;
            const split_name = split_element.dataset.name;
            const data_brew_split = brew.split.find(a => a.name === split_name);

            data_brew_split.amount -= button_split;
            split_element.dataset.value -= button_split;

            const badge = split_element.querySelector(".badge");
            badge.textContent = `${split_element.dataset.value}L`

            const new_split = { name: "New Partition", amount: button_split, available: true };
            brew.split.push(new_split);

            list_group.appendChild(createBrewSplit(new_split, brew_split_handler, lock_handler));

            refreshSplitButtons(data_brew_split, button_group, split_element, brew_split_handler, lock_handler);

            if(split_element.dataset.value <= 0)
            {
                brew.split.splice(brew.split.indexOf(data_brew_split), 1)
                split_element.remove();
            }
        };

        for(const split of brew.split)
            list_group.appendChild(createBrewSplit(split, brew_split_handler, lock_handler));

        return card;
    }

    for(const brew of data.brews)
        brew_root.appendChild(createBrew(brew));

    function addHomebrew()
    {
        const nameInput = document.getElementById("new_homebrew_name");
        const litresInput = document.getElementById("new_homebrew_litres");

        const litres = parseFloat(litresInput.value) || defaultLitres

        const new_brew = {
            name: nameInput.value,
            totVolume: litres,
            split: [{
                name: "Storage",
                amount: litres,
                available: true
            }]
        };

        data.brews.push(new_brew);
        brew_root.appendChild(createBrew(new_brew));
    }

    function rationalise()
    {
        for(const brew of data.brews)
        {
            const to_merge = brew.split.filter(a => a.name.startsWith("#"));
            const dont_merge = brew.split.filter(a => !a.name.startsWith("#"));
            const merged = [];

            for(const part of to_merge)
            {
                const prev = merged.find(a => a.name == part.name);

                if(prev === undefined)
                {
                    merged.push(part);

                    continue;
                }

                prev.amount += part.amount;
            }

            merged.forEach(m => m.name = m.name.substring(1));

            console.log(merged);

            brew.split = [...dont_merge, ...merged]
        }
    }

    function createExport()
    {
        rationalise();

        const export_container = document.getElementById("export_container");
        const dataCompressed = JSON.stringify(data);

        let path = window.location.href.split('?')[0];

        const link = document.createElement("a");
        link.target = "_blank";
        link.href = `${path}?import=${btoa(dataCompressed)}`;
        link.innerText = link.href;

        export_container.innerHTML = "";
        export_container.appendChild(link);
    }

    function importData()
    {
        const import_export = document.getElementById("import_export");
        data = JSON.parse(atob(import_export.value));

        for(const brew of data.brews)
            brew_root.appendChild(createBrew(brew));
    }

</script>