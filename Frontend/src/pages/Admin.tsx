import MenuBox from "../components/MenuBox"

const Admin = () => {
    return (
        <>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p>Here can you see relevant information about your business</p>

            <div className="flex gap-5 mt-3">
                <MenuBox 
                    name="Notifications"
                    pathname="/admin/notifications"
                    to="blue-700"
                    from="blue-600"
                    count={0}
                />
                <MenuBox 
                    name="Projects"
                    pathname="/admin/projects"
                    to="red-700"
                    from="red-600"
                    count={0}
                />
                <MenuBox 
                    name="Charts"
                    pathname="/admin/charts"
                    to="orange-700"
                    from="orange-600"
                    count={0}
                />
            </div>
        </>
    )
}

export default Admin