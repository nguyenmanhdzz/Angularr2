import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const styles = {
  appBar: {
    position: "fixed",
    top: 0,
    zIndex: 1000,
  },
};

export default function Header() {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap>
          ATM
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InputBase
              placeholder="Tìm kiếm..."
              inputProps={{ "aria-label": "Tìm kiếm" }}
              sx={{ mr: 1 }}
            />
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Tabs value={false} aria-label="navigation tabs">
          <Tab label="Sản phẩm" href="/" />
          <Tab label="About Us" href="/aboutus" />
          <Tab label="Blog" href="/blog" />
          {/* Thêm các tab khác nếu cần */}
        </Tabs>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
          <Link to={`/signup`}>
            <Button color="inherit">Đăng nhập</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
