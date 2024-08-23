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
                    to="to-blue-700"
                    from="from-blue-600"
                    count={0}
                />
                <MenuBox 
                    name="Projects"
                    pathname="/admin/projects"
                    to="to-red-700"
                    from="from-red-600"
                    count={0}
                />
                <MenuBox 
                    name="Charts"
                    pathname="/admin/charts"
                    to="from-orange-700"
                    from="to-orange-600"
                    count={0}
                />
            </div>
        </>
    )
}

export default Admin