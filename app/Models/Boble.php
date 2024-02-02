<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Boble extends Model
{
    use HasFactory;
    use UUID;

    protected $fillable = [
        'user_id',
        'title',
        'text',
        'tags'
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
    public function threads(): HasMany {
        return $this->hasMany(MessageThread::class);
    }
}
