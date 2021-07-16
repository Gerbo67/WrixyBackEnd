// imports
import * as mssql from '../database/database';

class HomeDAO {
    public async getBooksPage(startQuery: number, endQuery: number) {
        await mssql.Admin.pool;
        try {
            const request = mssql.Admin.connection.request();
            const result = await request
                .input('start', mssql.Admin.sql.Int(), startQuery)
                .input('end', mssql.Admin.sql.Int(), endQuery)
                .execute('PROCBOOKSPAGE');
            return result.recordsets[0];
        } catch (err) {
            return err;
        }
    }

    public async getBooksPages() {
        await mssql.Admin.pool;
        try {
            const request = mssql.Admin.connection.request();
            const result = await request
                .query('SELECT COUNT(*) AS BooksTotal FROM Books');
            return result.recordset[0].BooksTotal;
        } catch (err) {
            return err;
        }
    }
}

export const dao = new HomeDAO();