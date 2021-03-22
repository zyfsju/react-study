def create_store(reducer):
    func = create_store
    func.state = []
    func.listeners = []
    # create_store.state = {}
    # create_store.listeners = []
    # state = create_store.state
    # listeners = create_store.listeners
    def get_state():
        return func.state

    def subscribe(listener):
        func.listeners.append(listener)

        def update_listeners():
            func.listeners = [l for l in func.listeners if l != listener]

        return update_listeners

    def dispatch(action):
        func.state = reducer(func.state, action)
        for listener in func.listeners:
            listener()

    func.get_state = get_state
    func.subscribe = subscribe
    func.dispatch = dispatch
    return func
    # return {"get_state": get_state, "subscribe": subscribe, "dispatch": dispatch}


def todos(state, action):
    if action.get("type") == "ADD_TODO":
        return [*state, action.get("todo", {})]
    return state


print("before creating an instance", create_store.__dict__)
store = create_store(todos)
print("after creating an instance", store.__dict__)
# store["subscribe"](lambda: print("The new state is", store["get_state"]()))
# store["dispatch"](
#     {"type": "ADD_TODO", "todo": {"id": 0, "name": "Learn React", "complete": False}}
# )
# store["dispatch"](
#     {"type": "ADD_TODO", "todo": {"id": 1, "name": "Read books", "complete": False}}
# )
store.subscribe(lambda: print("The new state is", store.get_state()))
store.dispatch(
    {"type": "ADD_TODO", "todo": {"id": 0, "name": "Learn React", "complete": False}}
)
store.dispatch(
    {"type": "ADD_TODO", "todo": {"id": 1, "name": "Read books", "complete": False}}
)


store_2 = create_store(todos)
print("the original store: ")
print(store.get_state())  # the last instance gets overwritten
store_2.subscribe(lambda: print("The new state is", store_2.get_state()))
store_2.dispatch(
    {
        "type": "ADD_TODO",
        "todo": {"id": 3, "name": "Learn Full Stack", "complete": False},
    }
)
store_2.dispatch(
    {"type": "ADD_TODO", "todo": {"id": 10, "name": "Read books", "complete": False}}
)
