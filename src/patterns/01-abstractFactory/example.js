/*
ComponentFactory
createButton
createInput
createTable
*/

/* interface ComponentFactory {
    createButton(): Button;
    createInput(): Input;
    createTable(): Table;
}

const darkThemeFabric = {
    getButton() {
        return Button
    },
    createInput() {
        return <Input/>
    },
    createTable() {
        return <Table/>}
}
const defaultThemeFabric = {
    createButton() {

    },
    createInput() {

    },
    createTable() {}
}
const nativeThemeFabric = {
    createButton() {

    },
    createInput() {

    },
    createTable() {}
}


function createButton(fabric: ComponentFactory) {
    return fabric.createButton();
}

function createInput(fabric: ComponentFactory) {
    
}

function createTable(fabric: ComponentFactory) {
    
}

function App() {
    return <FabricContext.Provider value={isWeb ? darkThemeFabric : defaultThemeFabric}>{...}</Provider>
}


function Component() {
    const fabric = useContext(FabricContext)
    return <div>
        {currentFabric.createButton()}
    </div>
} */
