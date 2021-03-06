package com.newdjk.doctor.greendao.gen;

import android.database.Cursor;
import android.database.sqlite.SQLiteStatement;

import org.greenrobot.greendao.AbstractDao;
import org.greenrobot.greendao.Property;
import org.greenrobot.greendao.internal.DaoConfig;
import org.greenrobot.greendao.database.Database;
import org.greenrobot.greendao.database.DatabaseStatement;

import com.newdjk.doctor.ui.entity.FunctionDataEntity;

// THIS CODE IS GENERATED BY greenDAO, DO NOT EDIT.
/** 
 * DAO for table "FUNCTION_DATA_ENTITY".
*/
public class FunctionDataEntityDao extends AbstractDao<FunctionDataEntity, Long> {

    public static final String TABLENAME = "FUNCTION_DATA_ENTITY";

    /**
     * Properties of entity FunctionDataEntity.<br/>
     * Can be used for QueryBuilder and for referencing column names.
     */
    public static class Properties {
        public final static Property Id = new Property(0, Long.class, "id", true, "_id");
        public final static Property Data = new Property(1, String.class, "data", false, "DATA");
        public final static Property DoctorId = new Property(2, int.class, "doctorId", false, "DOCTOR_ID");
        public final static Property AllFunctionData = new Property(3, String.class, "allFunctionData", false, "ALL_FUNCTION_DATA");
    }


    public FunctionDataEntityDao(DaoConfig config) {
        super(config);
    }
    
    public FunctionDataEntityDao(DaoConfig config, DaoSession daoSession) {
        super(config, daoSession);
    }

    /** Creates the underlying database table. */
    public static void createTable(Database db, boolean ifNotExists) {
        String constraint = ifNotExists? "IF NOT EXISTS ": "";
        db.execSQL("CREATE TABLE " + constraint + "\"FUNCTION_DATA_ENTITY\" (" + //
                "\"_id\" INTEGER PRIMARY KEY AUTOINCREMENT ," + // 0: id
                "\"DATA\" TEXT," + // 1: data
                "\"DOCTOR_ID\" INTEGER NOT NULL UNIQUE ," + // 2: doctorId
                "\"ALL_FUNCTION_DATA\" TEXT);"); // 3: allFunctionData
    }

    /** Drops the underlying database table. */
    public static void dropTable(Database db, boolean ifExists) {
        String sql = "DROP TABLE " + (ifExists ? "IF EXISTS " : "") + "\"FUNCTION_DATA_ENTITY\"";
        db.execSQL(sql);
    }

    @Override
    protected final void bindValues(DatabaseStatement stmt, FunctionDataEntity entity) {
        stmt.clearBindings();
 
        Long id = entity.getId();
        if (id != null) {
            stmt.bindLong(1, id);
        }
 
        String data = entity.getData();
        if (data != null) {
            stmt.bindString(2, data);
        }
        stmt.bindLong(3, entity.getDoctorId());
 
        String allFunctionData = entity.getAllFunctionData();
        if (allFunctionData != null) {
            stmt.bindString(4, allFunctionData);
        }
    }

    @Override
    protected final void bindValues(SQLiteStatement stmt, FunctionDataEntity entity) {
        stmt.clearBindings();
 
        Long id = entity.getId();
        if (id != null) {
            stmt.bindLong(1, id);
        }
 
        String data = entity.getData();
        if (data != null) {
            stmt.bindString(2, data);
        }
        stmt.bindLong(3, entity.getDoctorId());
 
        String allFunctionData = entity.getAllFunctionData();
        if (allFunctionData != null) {
            stmt.bindString(4, allFunctionData);
        }
    }

    @Override
    public Long readKey(Cursor cursor, int offset) {
        return cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0);
    }    

    @Override
    public FunctionDataEntity readEntity(Cursor cursor, int offset) {
        FunctionDataEntity entity = new FunctionDataEntity( //
            cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0), // id
            cursor.isNull(offset + 1) ? null : cursor.getString(offset + 1), // data
            cursor.getInt(offset + 2), // doctorId
            cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3) // allFunctionData
        );
        return entity;
    }
     
    @Override
    public void readEntity(Cursor cursor, FunctionDataEntity entity, int offset) {
        entity.setId(cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0));
        entity.setData(cursor.isNull(offset + 1) ? null : cursor.getString(offset + 1));
        entity.setDoctorId(cursor.getInt(offset + 2));
        entity.setAllFunctionData(cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3));
     }
    
    @Override
    protected final Long updateKeyAfterInsert(FunctionDataEntity entity, long rowId) {
        entity.setId(rowId);
        return rowId;
    }
    
    @Override
    public Long getKey(FunctionDataEntity entity) {
        if(entity != null) {
            return entity.getId();
        } else {
            return null;
        }
    }

    @Override
    public boolean hasKey(FunctionDataEntity entity) {
        return entity.getId() != null;
    }

    @Override
    protected final boolean isEntityUpdateable() {
        return true;
    }
    
}
