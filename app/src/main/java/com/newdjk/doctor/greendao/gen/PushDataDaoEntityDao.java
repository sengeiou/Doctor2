package com.newdjk.doctor.greendao.gen;

import android.database.Cursor;
import android.database.sqlite.SQLiteStatement;

import org.greenrobot.greendao.AbstractDao;
import org.greenrobot.greendao.Property;
import org.greenrobot.greendao.internal.DaoConfig;
import org.greenrobot.greendao.database.Database;
import org.greenrobot.greendao.database.DatabaseStatement;

import com.newdjk.doctor.ui.entity.PushDataDaoEntity;

// THIS CODE IS GENERATED BY greenDAO, DO NOT EDIT.
/** 
 * DAO for table "PUSH_DATA_DAO_ENTITY".
*/
public class PushDataDaoEntityDao extends AbstractDao<PushDataDaoEntity, Long> {

    public static final String TABLENAME = "PUSH_DATA_DAO_ENTITY";

    /**
     * Properties of entity PushDataDaoEntity.<br/>
     * Can be used for QueryBuilder and for referencing column names.
     */
    public static class Properties {
        public final static Property Id = new Property(0, Long.class, "id", true, "_id");
        public final static Property Title = new Property(1, String.class, "title", false, "TITLE");
        public final static Property Content = new Property(2, String.class, "content", false, "CONTENT");
        public final static Property Data = new Property(3, String.class, "data", false, "DATA");
        public final static Property Time = new Property(4, java.util.Date.class, "time", false, "TIME");
        public final static Property IsRead = new Property(5, boolean.class, "isRead", false, "IS_READ");
        public final static Property DrId = new Property(6, int.class, "drId", false, "DR_ID");
        public final static Property MsgId = new Property(7, int.class, "msgId", false, "MSG_ID");
    }


    public PushDataDaoEntityDao(DaoConfig config) {
        super(config);
    }
    
    public PushDataDaoEntityDao(DaoConfig config, DaoSession daoSession) {
        super(config, daoSession);
    }

    /** Creates the underlying database table. */
    public static void createTable(Database db, boolean ifNotExists) {
        String constraint = ifNotExists? "IF NOT EXISTS ": "";
        db.execSQL("CREATE TABLE " + constraint + "\"PUSH_DATA_DAO_ENTITY\" (" + //
                "\"_id\" INTEGER PRIMARY KEY AUTOINCREMENT ," + // 0: id
                "\"TITLE\" TEXT," + // 1: title
                "\"CONTENT\" TEXT," + // 2: content
                "\"DATA\" TEXT," + // 3: data
                "\"TIME\" INTEGER," + // 4: time
                "\"IS_READ\" INTEGER NOT NULL ," + // 5: isRead
                "\"DR_ID\" INTEGER NOT NULL ," + // 6: drId
                "\"MSG_ID\" INTEGER NOT NULL );"); // 7: msgId
        // Add Indexes
        db.execSQL("CREATE UNIQUE INDEX " + constraint + "IDX_PUSH_DATA_DAO_ENTITY_MSG_ID ON PUSH_DATA_DAO_ENTITY" +
                " (\"MSG_ID\" ASC);");
    }

    /** Drops the underlying database table. */
    public static void dropTable(Database db, boolean ifExists) {
        String sql = "DROP TABLE " + (ifExists ? "IF EXISTS " : "") + "\"PUSH_DATA_DAO_ENTITY\"";
        db.execSQL(sql);
    }

    @Override
    protected final void bindValues(DatabaseStatement stmt, PushDataDaoEntity entity) {
        stmt.clearBindings();
 
        Long id = entity.getId();
        if (id != null) {
            stmt.bindLong(1, id);
        }
 
        String title = entity.getTitle();
        if (title != null) {
            stmt.bindString(2, title);
        }
 
        String content = entity.getContent();
        if (content != null) {
            stmt.bindString(3, content);
        }
 
        String data = entity.getData();
        if (data != null) {
            stmt.bindString(4, data);
        }
 
        java.util.Date time = entity.getTime();
        if (time != null) {
            stmt.bindLong(5, time.getTime());
        }
        stmt.bindLong(6, entity.getIsRead() ? 1L: 0L);
        stmt.bindLong(7, entity.getDrId());
        stmt.bindLong(8, entity.getMsgId());
    }

    @Override
    protected final void bindValues(SQLiteStatement stmt, PushDataDaoEntity entity) {
        stmt.clearBindings();
 
        Long id = entity.getId();
        if (id != null) {
            stmt.bindLong(1, id);
        }
 
        String title = entity.getTitle();
        if (title != null) {
            stmt.bindString(2, title);
        }
 
        String content = entity.getContent();
        if (content != null) {
            stmt.bindString(3, content);
        }
 
        String data = entity.getData();
        if (data != null) {
            stmt.bindString(4, data);
        }
 
        java.util.Date time = entity.getTime();
        if (time != null) {
            stmt.bindLong(5, time.getTime());
        }
        stmt.bindLong(6, entity.getIsRead() ? 1L: 0L);
        stmt.bindLong(7, entity.getDrId());
        stmt.bindLong(8, entity.getMsgId());
    }

    @Override
    public Long readKey(Cursor cursor, int offset) {
        return cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0);
    }    

    @Override
    public PushDataDaoEntity readEntity(Cursor cursor, int offset) {
        PushDataDaoEntity entity = new PushDataDaoEntity( //
            cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0), // id
            cursor.isNull(offset + 1) ? null : cursor.getString(offset + 1), // title
            cursor.isNull(offset + 2) ? null : cursor.getString(offset + 2), // content
            cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3), // data
            cursor.isNull(offset + 4) ? null : new java.util.Date(cursor.getLong(offset + 4)), // time
            cursor.getShort(offset + 5) != 0, // isRead
            cursor.getInt(offset + 6), // drId
            cursor.getInt(offset + 7) // msgId
        );
        return entity;
    }
     
    @Override
    public void readEntity(Cursor cursor, PushDataDaoEntity entity, int offset) {
        entity.setId(cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0));
        entity.setTitle(cursor.isNull(offset + 1) ? null : cursor.getString(offset + 1));
        entity.setContent(cursor.isNull(offset + 2) ? null : cursor.getString(offset + 2));
        entity.setData(cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3));
        entity.setTime(cursor.isNull(offset + 4) ? null : new java.util.Date(cursor.getLong(offset + 4)));
        entity.setIsRead(cursor.getShort(offset + 5) != 0);
        entity.setDrId(cursor.getInt(offset + 6));
        entity.setMsgId(cursor.getInt(offset + 7));
     }
    
    @Override
    protected final Long updateKeyAfterInsert(PushDataDaoEntity entity, long rowId) {
        entity.setId(rowId);
        return rowId;
    }
    
    @Override
    public Long getKey(PushDataDaoEntity entity) {
        if(entity != null) {
            return entity.getId();
        } else {
            return null;
        }
    }

    @Override
    public boolean hasKey(PushDataDaoEntity entity) {
        return entity.getId() != null;
    }

    @Override
    protected final boolean isEntityUpdateable() {
        return true;
    }
    
}