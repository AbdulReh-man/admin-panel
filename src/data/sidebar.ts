import {
  AssignmentOutlinedIcon,
  InventoryOutlinedIcon,
  StorefrontOutlinedIcon,
  QueryStatsOutlinedIcon,
  ForumOutlinedIcon,
  GroupIcon,
} from "./icons";

export const SideabrAdmin = [
  {
    title: "Orders",
    to: "/",
    icon: AssignmentOutlinedIcon,
    items: [
      {
        title: "Order Lists",
        to: "",
      },
      {
        title: "Order Detaails",
        to: "",
      },
      {
        title: "Cancel Orders",
        to: "/invoices",
      },
    ],
  },
  {
    title: "Products",
    to: "/",
    icon: InventoryOutlinedIcon,
    items: [
      {
        title: "Product Lists",
        to: "",
      },
      {
        title: "Create Product",
        to: "",
      },
      {
        title: "Product Reviews",
        to: "",
      },
    ],
  },
  {
    title: "Customers",
    to: "/",
    icon: GroupIcon,
    items: [
      {
        title: "Customer List",
        to: "",
      },
      {
        title: "Customer Details",
        to: "",
      },
    ],
  },
  {
    title: "Sellers",
    to: "/",
    icon: StorefrontOutlinedIcon,
    items: [
      {
        title: "Seller List",
        to: "",
      },
      {
        title: "Earning History",
        to: "",
      },
      {
        title: "Seller Reviews",
        to: "",
      },
    ],
  },
  {
    title: "Earnings",
    to: "/",
    icon: QueryStatsOutlinedIcon,
    items: [
      {
        title: "Earning History",
        to: "",
      },
    ],
  },
  {
    title: "Reviews",
    to: "/",
    icon: ForumOutlinedIcon,
    items: [
      {
        title: "Product Reviews",
        to: "",
      },
      {
        title: "Seller Reviews",
        to: "",
      },
    ],
  },
];
export const SideabrVendor = [
  {
    title: "Orders",
    to: "/",
    icon: AssignmentOutlinedIcon,
    items: [
      {
        title: "Order Lists",
        to: "",
      },
      {
        title: "Order Detaails",
        to: "",
      },
      {
        title: "Cancel Orders",
        to: "/invoices",
      },
    ],
  },
  {
    title: "Products",
    to: "/",
    icon: InventoryOutlinedIcon,
    items: [
      {
        title: "Product Lists",
        to: "",
      },
      {
        title: "Create Product",
        to: "",
      },
      {
        title: "Product Reviews",
        to: "",
      },
    ],
  },
  {
    title: "Customers",
    to: "/",
    icon: GroupIcon,
    items: [
      {
        title: "Customer List",
        to: "",
      },
      {
        title: "Customer Details",
        to: "",
      },
    ],
  },
  {
    title: "Sellers",
    to: "/",
    icon: StorefrontOutlinedIcon,
    items: [
      {
        title: "Seller List",
        to: "",
      },
      {
        title: "Earning History",
        to: "",
      },
      {
        title: "Seller Reviews",
        to: "",
      },
    ],
  },
  {
    title: "Earnings",
    to: "/",
    icon: QueryStatsOutlinedIcon,
    items: [
      {
        title: "Earning History",
        to: "",
      },
    ],
  },
  {
    title: "Reviews",
    to: "/",
    icon: ForumOutlinedIcon,
    items: [
      {
        title: "Product Reviews",
        to: "",
      },
      {
        title: "Seller Reviews",
        to: "",
      },
    ],
  },
];

// <Box paddingLeft={open ? undefined : "10%"}>
//   <Item title='Dashboard' to='/' icon={<HomeOutlinedIcon />} />
//   <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Data
//   </Typography>
//   <SubMenu label='Charts'>
//     <Item
//       title='Manage Team'
//       to='/team'
//       icon={<PeopleOutlinedIcon />}
//     />
//     <Item
//       title='Contacts Information'
//       to='/contacts'
//       icon={<ContactsOutlinedIcon />}
//     />
//     <Item
//       title='Invoices Balances'
//       to='/invoices'
//       icon={<ReceiptOutlinedIcon />}
//     />
//   </SubMenu>
//   {/* Users */}
//   <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Users
//   </Typography>
//   {/* Products */}
//   <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Products
//   </Typography>
//   {/* Vendors */}
//   <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Vendors
//   </Typography>
//   {/* Invoices */}
//   <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Invoices
//   </Typography>
//   {/* Orders */}
//   <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Orders
//   </Typography>
//   {/* Reviews */}
//   <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Reviews
//   </Typography>

//   {/* Pages */}
//   <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Pages
//   </Typography>
//   <Item title='Profile Form' to='/form' icon={<PersonOutlinedIcon />} />
//   <Item title='FAQ Page' to='/faq' icon={<HelpOutlineOutlinedIcon />} />
//   {/* Charts */}
//   {/* <Typography
//     variant='h6'
//     color={colors.grey[300]}
//     sx={{ m: "15px 0 5px 20px" }}
//   >
//     Charts
//   </Typography>
//   <Item title='Bar Chart' to='/bar' icon={<BarChartOutlinedIcon />} />
//   <Item
//     title='Pie Chart'
//     to='/pie'
//     icon={<PieChartOutlineOutlinedIcon />}
//   />
//   <Item title='Line Chart' to='/line' icon={<TimelineOutlinedIcon />} />
//   <Item
//     title='Geography Chart'
//     to='/geography'
//     icon={<MapOutlinedIcon />}
//   /> */}
// </Box>
